import { IsNotEmpty } from 'class-validator';
import { CreateHomeDTO } from './create-home.dto';

export class UpdateHomeDto extends CreateHomeDTO {
  @IsNotEmpty()
  id: number;
}
