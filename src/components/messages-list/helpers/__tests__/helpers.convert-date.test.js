import {convertToNiceDate, formatDate} from './../convert-date';

describe('Converting data into the format Today, Yesterday :: convertToNiceDate', () => {
    describe('When input data === Today', () => {
        it('should return human readable date Today', () => {
            const input = convertToNiceDate(new Date());

            const output = 'Today';

            expect(input).toEqual(output);
        });
    });

    describe('When input data === Yesterday', () => {
        it('should return human readable date Yesterday', () => {
            const input = convertToNiceDate(new Date(2019, 2, 2));

            const output = 'Yesterday';

            expect(input).toEqual(output);
        });
    });

    describe('When input data not Date', () => {
        it('should return null', () => {
            const input = convertToNiceDate('test');

            const output = null;

            expect(input).toEqual(output);
        });
    });
});

describe('Converting data into the format day month year :: formatDate', () => {
    describe('When input data === Date', () => {
        it('should return human readable date (day month yer)', () => {
            const input = formatDate(new Date(2019, 1, 1));

            const output = '1 February 2019';

            expect(input).toEqual(output);
        });
    });

    describe('When input data not Date', () => {
        it('should return null', () => {
            const input = formatDate('test');

            const output = null;

            expect(input).toEqual(output);
        });
    });
});
