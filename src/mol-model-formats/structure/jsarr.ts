import { Task } from '../../mol-task';
import { Coordinates, Frame, Time } from '../../mol-model/structure/coordinates';

export function coordinatesFromArray(arr: number[][]): Task<Coordinates> {
    return Task.create('Parse Coordinates Array', async ctx => {
        await ctx.update('Converting to coordinates');

        console.log(arr)

        const deltaTime = Time(1, 'step');
        const offsetTime = Time(0, deltaTime.unit);

        const frames: Frame[] = [];
        for (let i = 0; i < arr[0].length; ++i) {
            frames.push({
                elementCount: arr[0].length,
                x: [arr[0][i]],
                y: [arr[0][i]],
                z: [arr[0][i]],
                xyzOrdering: { isIdentity: true },
                time: Time(offsetTime.value + deltaTime.value * i, deltaTime.unit)
            });
        }

        return Coordinates.create(frames, deltaTime, offsetTime);
    });
}
