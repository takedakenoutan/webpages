package takedake.app;

import android.app.*;
import android.os.*;
import android.net.Uri;
import android.support.customtabs.*;
import org.chromium.customtabsclient.shared.CustomTabsHelper;
import android.content.*;
import android.view.*;

public class MainActivity extends Activity 
{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
		
		createDebug cDebug = new createDebug();
		cDebug.openDebug(this);
    }
	public void cButton(View view){
		createDebug cDebug = new createDebug();
		cDebug.openDebug(this);
	}
}

class createDebug{
	public void openDebug(Activity self){
		String url = "https://takedakenoutan.github.io/webpages/sites/JsDebugger-sites/";
		String packageName = CustomTabsHelper.getPackageNameToUse(self);
		CustomTabsIntent.Builder builder = new CustomTabsIntent.Builder();
		builder.setShowTitle(true);

		CustomTabsIntent customTabsIntent = builder.build();
		customTabsIntent.intent.setPackage(packageName);
		customTabsIntent.launchUrl(self, Uri.parse(url));
	}
}
