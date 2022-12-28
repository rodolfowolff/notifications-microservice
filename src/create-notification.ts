import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @Length(5, 255, { message: 'Minimo de 5 e maximo 255 caracteres' })
  content: string;

  @IsNotEmpty()
  @Length(5, 100, { message: 'Minimo de 5 e maximo 100 caracteres' })
  title: string;

  @IsNotEmpty()
  @Length(2, 100, { message: 'Minimo de 2 e maximo 100 caracteres' })
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
