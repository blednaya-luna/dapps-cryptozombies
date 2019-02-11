export default {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        ropsten: {
            network_id: 3,
            gas: 4000000,
        },
    },
};
