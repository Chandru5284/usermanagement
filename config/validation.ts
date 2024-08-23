import { User, UserErrors } from '@/types/user';
import { formConfig } from './formConfig';

export const validateUserData = (user: User): UserErrors => {
    const errors: any = {
        name: '',
        email: '',
        linkedinURL: '',
        gender: '',
        address: {
            line1: '',
            line2: '',
            state: '',
            city: '',
            pin: '',
        },
    };

    if (!user.name) {
        errors.name = 'Name is required';
    } else if (user.name.length < formConfig.name.minLength || user.name.length > formConfig.name.maxLength) {
        errors.name = `Name must be between ${formConfig.name.minLength} and ${formConfig.name.maxLength} characters.`;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(user.email)) {
        errors.email = 'Invalid email format.';
    }

    const urlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/;
    if (!user.linkedinURL) {
        errors.linkedinURL = 'LinkedIn URL is required';
    } else if (!urlPattern.test(user.linkedinURL)) {
        errors.linkedinURL = 'Invalid LinkedIn URL.';
    }

    if (!user.gender) {
        errors.gender = 'Gender is required';
    }

    if (!user.address.line1) {
        errors.address.line1 = 'Line 1 is required';
    } else if (user.address.line1.length < formConfig.address.line1.minLength || user.address.line1.length > formConfig.address.line1.maxLength) {
        errors.address.line1 = `Line 1 must be between ${formConfig.address.line1.minLength} and ${formConfig.address.line1.maxLength} characters.`;
    }

    if (!user.address.state) {
        errors.address.state = 'State is required';
    }

    if (!user.address.city) {
        errors.address.city = 'City is required';
    }

    const pinPattern = /^[0-9]{6}$/;
    if (!user.address.pin) {
        errors.address.pin = 'PIN is required';
    } else if (!pinPattern.test(user.address.pin)) {
        errors.address.pin = 'PIN must be exactly 6 digits';
    }

    return errors;
};
