import { West } from "./West";
import { Direction } from "./Direction";


export class South extends Direction {
  protected value: String = 'S';
  turnRight(): Direction {
    return new West();
  }
  turnLeft(): Direction {
    throw new Error("Method not implemented.");
  }
}