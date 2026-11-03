export default { writeFileSync(){}, readFileSync(){ throw new Error("fs unavailable in browser build"); }, readdirSync(){ return []; }, existsSync(){ return false; } };
