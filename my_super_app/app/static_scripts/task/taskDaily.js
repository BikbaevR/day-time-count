
export class TaskDaily {
    constructor(taskId, lastCompleted) {
        this._id = crypto.randomUUID();
        this._taskId = taskId;
        this._lastCompleted = lastCompleted;
    }

    get id() {
        return this._id;
    }
    get taskId(){
        return this._taskId;
    }
    get lastCompleted(){
        return this._taskId;
    }

    set taskId(taskId){
        this._taskId = taskId;
    }
    set lastCompleted(lastCompleted){
        this._lastCompleted = lastCompleted;
    }
}