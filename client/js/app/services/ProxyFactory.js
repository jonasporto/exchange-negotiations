class ProxyFactory {
	
	static create(object, props, action) {

		return new Proxy(object, {
		
			get(target, prop, receiver) {
				if (props.includes(prop) && typeof(target[prop]) == typeof(Function)) {
					return function() {
						console.log(`intercepting ${prop}`);
						Reflect.apply(target[prop], target, arguments);
						return action(target)
					}
				}

				return Reflect.get(target, prop, receiver);
			}
		})
	}
}