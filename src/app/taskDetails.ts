export interface ITaskDetails
{
    TaskID : bigint,
    TaskName : string,
    ParentTask : string,
    Priority : bigint,
    StartDate : Date,
    EndDate : Date
}