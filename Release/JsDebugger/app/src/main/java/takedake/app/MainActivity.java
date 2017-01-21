package takedake.app;

import android.app.*;
import android.os.*;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity 
{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
		
        WebView  myWebView = (WebView)findViewById(R.id.JsWeb);

        myWebView.setWebViewClient(new WebViewClient());

        myWebView.loadUrl("https://takedakenoutan.github.io/webpages/sites/JsDebugger-sites/");

        myWebView.getSettings().setJavaScriptEnabled(true);
    }
}