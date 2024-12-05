import {generateId} from "../tools/Tools";

export class TaskType {
    constructor(typeName) {
        this._id = generateId();
        this._typeName = typeName;
    }

    get id() {
        return this._id;
    }
    get typeName(){
        return this._typeName;
    }

    set typeName(value){
        this._typeName = value;
    }
}