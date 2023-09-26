import { thumbnailMover } from "./thumbnailMover";

describe("thumbnaiMover", () => {
    it('if given imageId and good boolean, move image to good directory', async () => {
        const imageId = 'my-image.jpg';
        const isGood = true;
        const fileMover = jest.fn();
        await thumbnailMover({ fileMover, imageId, isGood });
        expect(fileMover).toBeCalled();
    })
})