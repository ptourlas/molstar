/**
 * Copyright (c) 2017 molio contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 */

import Column from '../../../mol-base/collections/column'
import UUID from '../../../mol-base/utils/uuid'

interface Conformation {
    id: UUID,

    // ID is part of conformation because mmCIF is a leaky abstraction
    // thats assigns different atom ids to corresponding atoms in different models
    // ... go figure.
    atomId: Column<number>,

    occupancy: Column<number>,
    B_iso_or_equiv: Column<number>

    __x: ArrayLike<number>,
    __y: ArrayLike<number>,
    __z: ArrayLike<number>
}

export default Conformation