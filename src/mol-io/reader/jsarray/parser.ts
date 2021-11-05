import { ReaderResult as Result } from '../result';
import { Task } from '../../../mol-task';

export function parseArray(data: Array<Array<Number>>) {
    return Task.create<Result<Array<Array<Number>>>>('Parse ', async ctx => {
        try {
            /*this is where we supposedly check for structural errors?*/
            console.log('PARSING:', data)
            return Result.success(data);
        } catch (e) {
            return Result.error(e);
        }
    });
}