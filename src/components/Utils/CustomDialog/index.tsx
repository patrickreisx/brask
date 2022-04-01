import { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { AlertTrigger, AlertContent, CustomOverlay, CustomTitle, CustomDescription } from "./styles";

interface ContextDialogProps{
  children: ReactNode,
}

function CustomDialog({ children }: ContextDialogProps) {
  return (
    <>
       <AlertDialog.Root>
        <AlertTrigger>
          {children}
        </AlertTrigger>
        <AlertDialog.Portal>
          <CustomOverlay />
          <AlertContent >
            <CustomTitle>
              Are you absolutely sure?
            </CustomTitle>
            <CustomDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem error aliquam.
            </CustomDescription>
            <AlertDialog.Cancel>
              Cancelar
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              Excluir
            </AlertDialog.Action>
          </AlertContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
};

export default CustomDialog;
