## NFC

Have a look on [this guide](https://github.com/revtel/react-native-nfc-manager/blob/main/setup.md), and read the instruction below

### Android

At `AndroidManifest.xml` these lines are responsible for NFC

```xml
<manifest>
    <!-- https://developer.android.com/guide/topics/connectivity/nfc/nfc#manifest  -->
    <!-- The uses-feature element so that your application shows up in Google Play only for devices that have NFC hardware  -->
    <uses-permission android:name="android.permission.NFC" />
    <uses-feature android:name="android.hardware.nfc" android:required="true" />
    <!--    ....    -->
</manifest>
```

### iOS

1. Register and App ID
   - Add identifier https://developer.apple.com/account/resources/identifiers/list
   - Select `App IDs`
   - Select type `App`
   - Description, for example: 'Tag counter game'
   - Bundle id, for example: `com.aymkin.tagcountergame`
   - Enable capability `NFC Tag Reading`
   - Continue and Register
2. Open project in XCode
   - Open in XCode `TagCounterGame.xcworkspace`
   - Add account to XCode, if necessary
   - At `Signing & Capabilities` select the Team where you just created bundle id
   - Change the Bundle ID to the one just created
   - Change Display name, for example `Tag counter game`
3. In XCode add NFC capability
   3.1. At `Signing & Capabilities` press `+ Capability`, search for `Near Field Communication Tag Reading`
   3.2. After that you should see the entitlement file `ios/TagCounterGame/TagCounterGame.entitlements`
   3.3. In `info.plist` add `Privacy - NFC Scan Usage Description`

```xml
<dict>
<!--   ...  -->
   <key>NFCReaderUsageDescription</key>
   <string>Our app need to use NFC</string>
<!--   ...  -->
</dict>
```

### NFC manager API

1. Check if NFC supported by device `await NfcManager.isSupported()`
2. Start NFC if supported: `await NfcManager.start()`
