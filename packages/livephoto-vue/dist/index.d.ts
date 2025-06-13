import LivePhoto from './LivePhoto.vue';
import type { App } from 'vue';
export type { LivePhotoProps } from './types';
export { LivePhoto };
export declare const install: (app: App) => void;
declare const _default: {
    install: (app: App) => void;
    LivePhoto: import("vue").DefineComponent<import("./types").LivePhotoProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./types").LivePhotoProps> & Readonly<{}>, {
        loop: boolean;
        muted: boolean;
        photoSrc: string;
        videoSrc: string;
        useApple: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
};
export default _default;
export * from './types';
