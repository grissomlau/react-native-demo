//  Created by react-native-create-bridge

package com.reactnativedemo.helloworld;

import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;

public class HelloWorldManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "HelloWorld";
    private ThemedReactContext mContext;
    private LinearLayout view;
    private  TextView tv;
    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS;
    }

    @Override
    public View createViewInstance(ThemedReactContext context){
        // Create a view here
        // https://facebook.github.io/react-native/docs/native-components-android.html#2-implement-method-createviewinstance
        mContext = context;
        //view = new View(context);
        //view.setBackgroundColor(Color.BLUE);
        view = addViewByJava();
        return view;
    }

    @ReactProp(name = "exampleProp")
    public void setExampleProp(View view, String prop) {
        tv.setText(prop);
        // Set properties from React onto your native component via a setter method
        // https://facebook.github.io/react-native/docs/native-components-android.html#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation
    }


        private LinearLayout addViewByJava() {
        LinearLayout container = new LinearLayout(mContext);//主布局container
        tv = new TextView(mContext);//子View TextView
        // 为主布局container设置布局参数
        LinearLayout.LayoutParams llp = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.FILL_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        container.setLayoutParams(llp);//设置container的布局
        container.setOrientation(LinearLayout.HORIZONTAL);// 设置主布局的orientation
        // 为子View设置布局参数
        ViewGroup.LayoutParams vlp = new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT);
        tv.setLayoutParams(vlp);// 设置TextView的布局
        tv.setText("hello word");
        container.addView(tv);// 将TextView 添加到container中
        return container;
    }
}
