import {isObject} from "../shared/utils";
import {mutableHandler} from "./baseHanlders";

export function reactive (target) {
	// 创建一个响应式对象，目标对象有不同数据类型，array，object，set，map
	return createReactiveObject(target, mutableHandler);
}


// 创建一个响应式对象
function createReactiveObject (target, baseHandler) {
	// 监控对象，不是对象直接返回
	if ( !isObject(target) ) return target;

	const observed = new Proxy(target, baseHandler);
	return observed;
}
