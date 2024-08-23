export const formConfig = {
    name: {
        editable: true,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        editable: true,
    },
    linkedinURL: {
        pattern: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
        editable: true,
    },
    gender: {
        valid: ['Male', 'Female', 'Other'],
        editable: true,
    },
    address: {
        editable: true,
        line1: {
            minLength: 5,
            maxLength: 50,
            editable: true,
        },
        line2: {
            minLength: 0,
            maxLength: 50,
            editable: true,
        },
        state: {
            editable: true,
        },
        city: {
            editable: true,
        },
        pin: {
            pattern: /^[0-9]{6}$/,
            editable: true,
            minLength: 5,
            maxLength: 10,
        },
    },
};
