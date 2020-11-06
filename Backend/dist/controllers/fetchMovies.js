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
const movie_ids_js_1 = require("./movie_ids.js");
function getBooksAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        movie_ids_js_1.default.map((c) => __awaiter(this, void 0, void 0, function* () {
            yield axios('https://api.itbook.store/1.0/books/' + c).then(response => {
                let book = response.data;
                delete book.error;
                delete book.subtitle;
                delete book.isbn10;
                delete book.isbn13;
                books.push(book);
            });
        }));
    });
}
