import { IButtonDialogInterface } from './button.dialog.interface';

export interface IDialogInterface {
  cancelButton: IButtonDialogInterface;
  confirmButton: IButtonDialogInterface;
  dialogHeader: string;
  dialogContent: string;
}
