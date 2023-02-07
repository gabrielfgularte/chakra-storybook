import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    components: {
        Button: {
            baseStyle: {
                bg: 'blue',
                backgroundColor: 'blue',
                color: 'white',
            },
        },
    },
});
