import { ChangeDetectionStrategy, Component, inject, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { WorkersService } from '../../services/workers.service';
import { IWorker } from '../../interfaces/worker.interface';
import { Observable, ReplaySubject, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../../services/worker.service';
import { workerData, workerDataProvider } from '../../providers/worker-data.provider';

export type Card = {
  controlName: string,
  label: string,
  type: 'text' | 'tel' | 'date' | 'email' | 'select',
}

@Component({
  selector: 'admin-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: workerData,
      useFactory: workerDataProvider,
      deps: [ActivatedRoute, WorkerService]
    }
  ]
})
export class RecruitmentComponent {

  public dataURL: string = '';

  @ViewChild('img', { static: true }) public myImage!: ElementRef;
  @ViewChild('inputImg') public inputImage!: ElementRef;

  public workerData$: Observable<IWorker> = inject(workerData);

  public worker: IWorker = <IWorker>{};

  public readonly patternForValidationName: RegExp = /^(?=.*[а-яА-яA-Za-z])[а-яА-яA-Za-z]{2,}$/;


  public recruitmentForm: FormGroup = new FormGroup({
    img: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.pattern(this.patternForValidationName), Validators.maxLength(15)]),
    surname: new FormControl('', [Validators.required, Validators.pattern(this.patternForValidationName), Validators.maxLength(20)]),
    patronymic: new FormControl('', [Validators.pattern(this.patternForValidationName), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.email]),
    telephone: new FormControl('', [Validators.pattern(/^\+7\d{10}$/)]),
    position: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    completedEducationalInstitution: new FormControl(''),
    education: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    currentSalary: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
  });

  public recruitmentForm$: ReplaySubject<FormGroup> = new ReplaySubject<FormGroup>(1);

  public readonly cardsOfInputs: Card[] = [
    { controlName: 'name', label: 'Имя*', type: 'text' },
    { controlName: 'surname', label: 'Фамилия*', type: 'text' },
    { controlName: 'patronymic', label: 'Отчество', type: 'text' },
    { controlName: 'email', label: 'Email', type: 'email' },
    { controlName: 'telephone', label: 'Телефон', type: 'tel' },
    { controlName: 'position', label: 'Позиция*', type: 'text' },
    { controlName: 'dateOfBirth', label: 'Дата рождения*', type: 'date' },
    { controlName: 'completedEducationalInstitution', label: 'Уч. Учереждение', type: 'text' },
    { controlName: 'education', label: 'Образование*', type: 'select' },
    { controlName: 'place', label: 'Место работы*', type: 'text' },
    { controlName: 'currentSalary', label: 'Зарплата в рублях*', type: 'text' }
  ];

  constructor(private _workersService: WorkersService,
              private _formBuilder: FormBuilder, private _renderer: Renderer2) {
    this.workerData$.pipe(
      take(1)
    ).subscribe(worker => {
      if (worker !== null) {
        this.worker = worker;
        this.recruitmentForm = this._formBuilder.group({
          img: [worker.img],
          name: [worker.name.split(' ')[0]],
          surname: [worker.name.split(' ')[1]],
          patronymic: [worker.name.split(' ')[2]],
          email: [worker.email],
          telephone: [worker.phone],
          position: [worker.profession],
          dateOfBirth: [worker.dateOfBirth],
          completedEducationalInstitution: [worker.institution],
          education: [worker.education],
          place: [worker.place],
          currentSalary: [worker.currentSalary]
        });
      }
      this.recruitmentForm$.next(this.recruitmentForm);
    });
  }

  public makeImage = (): void => {
    const canvas: HTMLCanvasElement = this._renderer.createElement('canvas');
    const image: HTMLImageElement = new Image();
    this._renderer.setAttribute(image, 'src', URL.createObjectURL(this.inputImage.nativeElement.files[0]));
    image.onload = ():void => {
      this._renderer.setAttribute(canvas, 'width', image.naturalWidth.toString());
      this._renderer.setAttribute(canvas, 'height', image.naturalHeight.toString());
      const ctx:CanvasRenderingContext2D = canvas.getContext('2d')!;
      ctx.drawImage(image, 0, 0);
      this.dataURL = canvas.toDataURL();
      this.recruitmentForm.get('img')?.setValue(this.dataURL);
    };
    this.myImage.nativeElement.src = image.src;
  };

  public get isFormInvalid(): boolean {
    return this.recruitmentForm.invalid;
  }


  public trackByControlName(index: number, card: Card): string {
    return card.controlName;
  }

  public submitRecruitment(): void {
    this._workersService.setWorker(this.recruitmentForm.value, this.worker);
    this.recruitmentForm.reset();
  }
}
