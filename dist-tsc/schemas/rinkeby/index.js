"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../ContractRole/index");
const index_2 = require("../ERC721/index");
const index_3 = require("./rinkebyCryptoKitties/index");
const index_4 = require("./rinkebyCustom/index");
const index_5 = require("./rinkebyENSName/index");
const index_6 = require("./rinkebyOwnableContract/index");
const index_7 = require("./testRinkebyNFT/index");
exports.rinkebySchemas = [
    index_3.rinkebyCryptoKittiesSchema,
    index_4.rinkebyCustomSchema,
    index_5.rinkebyENSNameSchema,
    index_6.rinkebyOwnableContractSchema,
    index_7.testRinkebyNFTSchema,
    index_2.ERC721Schema,
    index_1.ContractRoleSchema,
];
//# sourceMappingURL=index.js.map