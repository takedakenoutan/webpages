package takedake.app;

import android.app.*;
import android.os.*;
import android.net.Uri;
import android.support.customtabs.*;
import org.chromium.customtabsclient.shared.CustomTabsHelper;

public class MainActivity extends Activity 
{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
		
		String url = "https://takedakenoutan.github.io/webpages/sites/JsDebugger-sites/";
		String packageName = CustomTabsHelper.getPackageNameToUse(this);
		CustomTabsIntent.Builder builder = new CustomTabsIntent.Builder();
		CustomTabsIntent customTabsIntent = builder.build();
		customTabsIntent.intent.setPackage(packageName);
		customTabsIntent.launchUrl(this, Uri.parse(url));
    }
}
