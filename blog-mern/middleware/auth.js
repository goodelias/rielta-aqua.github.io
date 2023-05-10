import { body } from 'express-validator'

export const signupValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('fullName', 'Write your full name').isLength({ min: 3 }),
    body('avatarUrl', 'Wrong URL for your avatar').optional().isURL(),
]

export const loginValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),        
]