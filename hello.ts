import template from "@babel/template";
import generate from "@babel/generator";
import * as t from "@babel/types";

const buildRequire = template(`
  const IMPORT_NAME = require(SOURCE);
`);

const ast: t.Node = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  SOURCE: t.stringLiteral("my-module"),
}) as any;

console.log(generate(ast).code);
