import React, { Component } from 'react';

import { Navigator } from 'react-native-deprecated-custom-components';

import Movie from './Movie';
import Cinema from './Cinema';

//默认应用的容器组件
export default class Top extends Component {

    //告知Navigator 模块切换时的效果
    configureScene() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    //根据传递的信息, 处理界面的切换
    renderScene(router, navigator) {
        switch (router.name) {
            case 'Movie':
                return <Movie navigator={navigator} />;
            case 'Cinema':
                return <Cinema navigator={navigator} />;
        }
    }

    render() {
        return (
            //根View
            <Navigator
                initialRoute={{ name: 'Movie' }}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
}