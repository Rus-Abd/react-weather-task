// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@pipes': path.resolve(__dirname, 'src/pipes'),
            '@slices': path.resolve(__dirname, 'src/redux/slices'),
            '@sagas': path.resolve(__dirname, 'src/redux/sagas'),
        },
    },
}
