import mongoose, { Decimal128 } from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

// An interface that describes the properties
// that are required to create a new User
interface WindowAttrs {
    partition: number;
    windowH: number;
    windowW: number;
    frameH: number;
    frameW: number;
    mullion: number;
    sashH: number;
    sashW: number;
    sillH: number;
    sillW: number;
    glassH: number;
    glassW: number;
    userId: string;
 }

// An interface that describes the properties
// that a User model has
interface WindowDoc extends mongoose.Document {
    partition: number;
    windowH: number;
    windowW: number;
    frameH: number;
    frameW: number;
    mullion: number;
    sashH: number;
    sashW: Decimal128;
    sillH: number;
    sillW: number;
    glassH: number;
    glassW: number;

    userId: string;
    version: number;
    orderId?: string;
 }

// An interface that describes the properties
// that a User Document has
interface WindowModel extends mongoose.Model<WindowDoc> {
    build(attrs: WindowAttrs): WindowDoc;
}

const windowSchema = new mongoose.Schema({
    partition: {
        type: Number,
        required: true
    },
    windowH: {
        type: Number,
        required: true
    },
    windowW: {
        type: Number,
        required: true
    },
    frameH: {
        type: Number,
        required: true
    },
    frameW: {
        type: Number,
        required: true
    },
    mullion: {
        type: Number,
        required: true
    },
    sashH: {
        type: Number,
        required: true
    },
    sashW: {
        type: Number,
        required: true
    },
    sillH: {
        type: Number,
        required: true
    },
    sillW: {
        type: Number,
        required: true
    },
    glassH: {
        type: Number,
        required: true
    },
    glassW: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    orderId: {
        type: String
    }
}, {
    versionKey: 'version',
    toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            }
        }
});

// Not working in mongoose v6
// ticketSchema.set('versionKey', 'version');
windowSchema.plugin(updateIfCurrentPlugin);

windowSchema.statics.build = (attrs: WindowDoc) => {
    return new Window(attrs);
};

const Window = mongoose.model<WindowDoc, WindowModel>('Window', windowSchema);

export { Window };