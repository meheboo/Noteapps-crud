"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createUser = void 0;
const prisma_1 = require("../config/prisma");
const createUser = (email, password) => {
    return prisma_1.prisma.user.create({
        data: {
            email,
            password
        }
    });
};
exports.createUser = createUser;
const findUserByEmail = (email) => {
    return prisma_1.prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            email: true,
            password: true
        }
    });
};
exports.findUserByEmail = findUserByEmail;
