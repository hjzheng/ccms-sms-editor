/* eslint-disable */
/*
* https://github.com/TheLarkInn/webpack-workshop-2018/blob/feature/0600-custom-webpack-plugins/build-utils/MyFirstWebpackPlugin.js
* */

class MyFirstPlugin {
	apply(compiler) {
		compiler.hooks.done.tapAsync('MyFirstPlugin', (stats, cb) => {
			const assetNames = [];
			for (let assetName in stats.compilation.assets) {
				assetNames.push(assetName);
			}
			console.log('my first plugin:', assetNames.join('\n'));
			cb();
		});
	}
}

module.exports = MyFirstPlugin;
