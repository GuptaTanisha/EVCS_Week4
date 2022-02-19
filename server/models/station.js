import mongoose from 'mongoose';

const stationSchema = mongoose.Schema({
    slot: {type: Array,
        default: []
    },
    stationId: Number
});

const Station= mongoose.model('Station',stationSchema);
export default Station;