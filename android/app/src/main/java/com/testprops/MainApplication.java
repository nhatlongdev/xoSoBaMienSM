package xoso98.com;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.zmxv.RNSound.RNSoundPackage;
import io.realm.react.RealmReactPackage; // add this import
import com.pilloxa.backgroundjob.BackgroundJobPackage;
import com.evollu.react.fa.FIRAnalyticsPackage;
// import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;  // <--- Import Package
import com.evollu.react.fcm.FIRMessagingPackage;
import com.idehub.Billing.InAppBillingBridgePackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new FIRMessagingPackage(),
          new RNExitAppPackage(),
          new RNSoundPackage(),
          new RealmReactPackage(), // add this line
          new BackgroundJobPackage(),
          new FIRAnalyticsPackage(),
          new RNDeviceInfo(),
          // new ReactNativePushNotificationPackage() // <---- Add the Package
          new InAppBillingBridgePackage("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgl4cERw5t+wh0CgxT2VlG158AnFeLoG4ntECLuRvCfCfhmKn51igxUd86Rm799dMajzXXGGRX1BwZ5D5TI0rCrL3yLU+liU56GPe1tq+fwSbRgRkk2OAgZQNlSpbGIYNaJq80xWiYpANDqOvXOFzyGU+HKVg8vEuWdCQhSzqctfw+0R9J+Ly3myz6fZON64TCx98q/7CJ7rOBF6M36Dz1EQikjvExbgH2YSJLbMcaWuCTFEQuED+w6q8T5UnEFjWZR1x0oSE56s5jx0RJ+Y/n9QP18mTZI1bV+j+ySVhpFhlj1eF9o3EaUgo4DrP/qOhrBRYlk7Bvz/BeDrTVwmjmwIDAQAB")
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
