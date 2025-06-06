"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUsers = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.json(users);
    }
    catch (e) {
        res.status(500).json({ message: `Error retrieving users: ${e.message}` });
    }
});
exports.getUsers = getUsers;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, cognitoId, profilePictureUrl = "default.png", teamId = 1, } = req.body;
        const newUser = yield prisma.user.create({
            data: {
                username,
                cognitoId,
                profilePictureUrl,
                teamId,
            },
        });
        res.json({ message: "User created successfully", newUser });
    }
    catch (e) {
        res.status(500).json({ message: `Error retrieving users: ${e.message}` });
    }
});
exports.createUsers = createUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { congnitoId } = req.params;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                cognitoId: congnitoId
            }
        });
        res.json(user);
    }
    catch (e) {
        res.status(500).json({ message: `Error retrieving user: ${e.message}` });
    }
});
exports.getUser = getUser;
