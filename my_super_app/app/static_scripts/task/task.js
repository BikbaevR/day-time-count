
export class Task {
    constructor(title, description = null, type, taskStatus) {
        this._id = crypto.randomUUID();
        this._title = title;
        this._description = description;
        this._type = type;
        this._taskStatus = taskStatus;
        this._created_at = Date.now();
        this._updated_at = Date.now();
    }


    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }
    get description(){
        return this._description;
    }
    get type(){
        return this._type;
    }
    get taskStatus(){
        return this._taskStatus;
    }
    get created_at(){
        return this._created_at;
    }
    get updated_at(){
        return this._updated_at;
    }


    set title(title){
        this._title = title;
    }
    set description(description){
        this._description = description;
    }
    set type(type){
        this._type = type;
    }
    set taskStatus(taskStatus){
        this._taskStatus = taskStatus;
    }
    set created_at(created_at){
        this._created_at = created_at;
    }
    set updated_at(updated_at){
        this._updated_at = updated_at;
    }
}