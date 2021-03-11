const formValidationOptions = {
    email: {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email is not valid',
        },
        minLength: {
            value: 3,
            message: 'Username must have at least 3 characters',
        },
    },
    password: {
        required: 'Password is required',
        minLength: {
            value: 5,
            message: 'Password must have at least 5 characters',
        },
    },
    emailUpdate: {
        pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email is not valid',
        },
        minLength: {
            value: 3,
            message: 'Username must have at least 3 characters',
        },
    },
    passwordUpdate: {
        minLength: {
            value: 5,
            message: 'Password must have at least 5 characters',
        },
    },
    bio: {
        minLength: {
            value: 5,
            message: 'Bio must have at least 5 characters',
        },
    },
    name: {
        pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Name must not require numbers',
        },
    },
    phone: {
        pattern: {
            value: /^[-+]?[0-9]+$/,
            message: 'Phone number must not contain any letters',
        },
        valueAsNumber: {
            value: true,
            message: 'Phone number has to be a number',
        },
        minLength: {
            value: 5,
            message: 'Phone number must have at least 5 characters',
        },
    },
};

export default formValidationOptions;
