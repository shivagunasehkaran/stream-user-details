# Stream User details : Sample application for Test assignment 

This Stream User details app allows you to see lot of users list with Avatar, Name and Phone. If you long press on the particular list item, 
then you will be able to see the Popup modal with blurry back ground. In that Popup modal you will be allow to see Email, City, Date of Birth and Gender for the individual user.

Please go ahead and play around  :)

## Covered :

  - Fetches list of users from API (https://randomuser.me/api?results=20) and displays a list of random users.
  - Show User details in Item list	(Name, Avatar/picture, Phone number)
  - When long press item, show component of overlay with blurry background with some details (Email, City, Date of Birth, Gender)
  - Created Overlay modal component without using any external library (such as Portals) and not used react-native-modal
  - Also, list should load more results as user scrolls down the list (pagination).
  - Project working on both Android and iOS
  - Project running on latest RN 0.64.2.
  - Bonus point : Added light and dark mode, depending on system's appearence preference. ( Hope i will get bonus point :D )
  - I have created app UI as per some best pratice approach.
  - As per requirement, not used any external library. Everything managed by own.

## Not Covered :  Willing to implement in the future.

  - I haven't included any animation for Overlay modal as it's not mandatory and short of time :(
  - Unable to cover 100% test cases, getting some failures due to Theme provider. (will cover in future)

## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture && tried TDD approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Testability** - Used **Jest** for Unit testing and **Enzyme** for component testing.
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:
  
  - react (17.0.1)
  - react-native (0.64.2)
  - jest (26.6.3) - devDependencies
  - enzyme (3.11.0) - devDependencies
  - enzyme-adapter-react-16 (1.15.6) - devDependencies
  - flow-bin (0.156.0) - devDependencies

## Thinking & Decisions :

  - Since, No pagination given in API. I have decided to add pagination after every 20 records.
  - Calling API on every URL change (Appending 20 when list reached page end)
  - Could use **UseMemo** for child render item but based on API, data's are changing every time you refresh. Understood rerender will happen everytime, so better not to use           **UseMemo** (According to the coding standard, If the component isn’t heavy and usually renders with different props, most likely not to use memoizations, 
    Using the following rule of thumb: don’t use memoization if you can’t quantify the performance gains.)
  - No error alerts added, because handled all the NULL check in all components and handled Promise reject for API failure.
  - Provided Loader (Activity indicator) before API calling and every load more items, Loader will shown in bottom of the screen, just for user interaction.
  - ColourPalette created for maintain colors
  - Have not included any external library for Modal Popup (overlay with blurry background), created custom component for populating user values but used small trick to display 
    blurry background (added static list image), we can follow better approach in future.
  - Created Utility function for convert ISO date to normal date. (Date of Birth)
  - Crated Constant file for maintain API url's
  
## outputs :
          
  ## Screenshots of Android(Light mode and dark mode)
  
   <img src="https://user-images.githubusercontent.com/11419839/126829281-38060465-4e51-4b3b-a410-de356cdfc5b3.png" width="400" height="700">
      <img src="https://user-images.githubusercontent.com/11419839/126829320-287d8297-c5d5-4513-a316-b40065f32721.png" width="400" height="700">
         <img src="https://user-images.githubusercontent.com/11419839/126829472-14b2451b-4683-4067-b4ae-1bedcf82586b.png" width="400" height="700">
            <img src="https://user-images.githubusercontent.com/11419839/126829683-7108a81b-d40c-4279-949a-735031a56208.png" width="400" height="700">
            
   ## Screenshots of iOS attached (Light mode and dark mode)
   
   <img src="https://user-images.githubusercontent.com/11419839/126829561-bcfd0b70-03ef-481d-8722-d10f97455fd2.png" width="400" height="700">
      <img src="https://user-images.githubusercontent.com/11419839/126829713-fb97c7e3-1981-493c-82c0-7c482ab445cb.png" width="400" height="700">
          <img src="https://user-images.githubusercontent.com/11419839/126831148-18397af5-e742-4a49-ad1d-a9522376315e.png" width="400" height="700">

      
## Happy coding .....
