var centerX , centerY, canClickOnGame = true, data = Object.create(gameData.data)[0];

//config font stuff
WebFontConfig = {
  google: { families: [ 'Montserrat' ] }
};

var mainGameVar = {
    preload: function (){
        //test button spritesheets
        game.load.spritesheet('testBtn1SS', 'Assets/Images/Test/baddie.png', 32, 32);
        game.load.spritesheet('testBtn2SS', 'Assets/Images/Test/book.jpg', 66, 25);
        game.load.spritesheet('testBtn3SS', 'Assets/Images/Test/dude.png', 48, 48);
        game.load.spritesheet('testBtn4SS', 'Assets/Images/Test/platform.png', 32, 40);
        game.load.spritesheet('testBtn5SS', 'Assets/Images/Test/storyOfSeeds.png', 48, 48);
        
        game.load.image("bookIMG", "Assets/Images/Test/book.jpg");                 
        game.load.image("pathIMG", "Assets/Images/Test/greyBlock.jpg");            
        game.load.image("pathPointIMG", "Assets/Images/Test/storyOfSeeds.png");    
        game.load.image("dudeIMG", "Assets/Images/Test/dude.png")                  
        game.load.image("tower1IMG", "Assets/Images/Test/baddie.png")             
        game.load.image("pauseBtnIMG", "Assets/Images/Test/pauseButton.jpg")             
        
        //more test tower assets
        //from canyon defense
        game.load.image("chainGunIMG", "Assets/Images/Test/canyonDefenseChainGun.png");    
        game.load.image("gooGunIMG", "Assets/Images/Test/canyonDefenseGooGun.png");
        game.load.image("gutlingLaserIMG", "Assets/Images/Test/canyonDefenseGutlingLaser.png");
        game.load.image("howitzerIMG", "Assets/Images/Test/canyonDefenseHowitzer.png");        
        game.load.image("missileTurretIMG", "Assets/Images/Test/canyonDefenseMissileTurret.png");
        game.load.image("aaGunIMG", "Assets/Images/Test/canyonDefenseAAGun.png");
        game.load.image("gaussCannonIMG", "Assets/Images/Test/canyonDefenseGaussCannon.png");
        game.load.image("nulificatorIMG", "Assets/Images/Test/canyonDefenseNulificator.png");
        game.load.image("oilSprayIMG", "Assets/Images/Test/canyonDefenseOilSpray.png");
        
        //icon assets
        game.load.image("chainGunIconIMG", "Assets/Images/Test/canyonDefenseChainGunIcon.png");    
        game.load.image("gooGunIconIMG", "Assets/Images/Test/canyonDefenseGooCannonIcon.png");
        game.load.image("gutlingLaserIconIMG", "Assets/Images/Test/canyonDefenseGutlingLaserIcon.png");
        game.load.image("howitzerIconIMG", "Assets/Images/Test/canyonDefenseHowitzerIcon.png");        
        game.load.image("missileTurretIconIMG", "Assets/Images/Test/canyonDefenseMissileTurretIcon.png");
        game.load.image("aaGunIconIMG", "Assets/Images/Test/canyonDefenseAAGunIcon.png");
        game.load.image("gaussCannonIconIMG", "Assets/Images/Test/canyonDefenseGaussCannonIcon.png");
        game.load.image("nulificatorIconIMG", "Assets/Images/Test/canyonDefenseNulificatorIcon.png");
        game.load.image("oilSprayIconIMG", "Assets/Images/Test/canyonDefenseOilSprayIcon.png");
        
        
        

        //from btd5
        game.load.image("beeKeeperIMG", "Assets/Images/Test/btd5BeeKeeper.png");
        game.load.image("bloonChipperIMG", "Assets/Images/Test/btd5BloonChipper.png");
        game.load.image("bombTowerIMG", "Assets/Images/Test/btd5BombTower.png");
        game.load.image("boomerangThrowerIMG", "Assets/Images/Test/btd5BoomerangThrower.png");
        game.load.image("dartlingGunIMG", "Assets/Images/Test/btd5DartlingGun.png");
        game.load.image("dartMonkeyIMG", "Assets/Images/Test/btd5DartMonkey.png");
        game.load.image("glueGunnerIMG", "Assets/Images/Test/btd5GlueGunner.png");
        game.load.image("iceTowerIMG", "Assets/Images/Test/btd5IceTower.png");
        game.load.image("monkeyAceIMG", "Assets/Images/Test/btd5MonkeyAce.png");
        game.load.image("monkeyApprenticeIMG", "Assets/Images/Test/btd5MonkeyApprentice.png");
        game.load.image("monkeyBuccaneerIMG", "Assets/Images/Test/btd5MonkeyBuccaneer.png");
        game.load.image("monkeyEngineerIMG", "Assets/Images/Test/btd5MonkeyEngineer.png");
        game.load.image("monkeySubIMG", "Assets/Images/Test/btd5MonkeySub.png");
        game.load.image("mortarTowerIMG", "Assets/Images/Test/btd5MortarTower.png");
        game.load.image("ninjaMonkeyIMG", "Assets/Images/Test/btd5NinjaMonkey.png");
        game.load.image("sniperMonkeyIMG", "Assets/Images/Test/btd5SniperMonkey.png");
        game.load.image("spikeFactoryIMG", "Assets/Images/Test/btd5SpikeFactory.png");
        game.load.image("superMonkeyIMG", "Assets/Images/Test/btd5SuperMonkey.png");
        game.load.image("tackShooterIMG", "Assets/Images/Test/btd5TackShooter.png");
        game.load.image("wizardLordIMG", "Assets/Images/Test/btd5WizardLord.png");        
        
        //icon assets
        game.load.image("bloonChipperIconIMG", "Assets/Images/Test/btd5BloonChipperIcon.png");
        game.load.image("bombTowerIconIMG", "Assets/Images/Test/btd5BombTowerIcon.png");
        game.load.image("boomerangThrowerIconIMG", "Assets/Images/Test/btd5BoomerangThrowerIcon.png");
        game.load.image("dartlingGunIconIMG", "Assets/Images/Test/btd5DartlingGunIcon.png");
        game.load.image("dartMonkeyIconIMG", "Assets/Images/Test/btd5DartMonkeyIcon.png");
        game.load.image("glueGunnerIconIMG", "Assets/Images/Test/btd5GlueGunnerIcon.png");
        game.load.image("iceTowerIconIMG", "Assets/Images/Test/btd5IceTowerIcon.png");
        game.load.image("monkeyAceIMG", "Assets/Images/Test/btd5MonkeyAceIcon.png");
        game.load.image("monkeyApprenticeIconIMG", "Assets/Images/Test/btd5MonkeyApprenticeIcon.png");
        game.load.image("monkeyBuccaneerIconIMG", "Assets/Images/Test/btd5MonkeyBuccaneerIcon.png");
        game.load.image("monkeyEngineerIconIMG", "Assets/Images/Test/btd5MonkeyEngineerIcon.png");
        game.load.image("monkeySubIconIMG", "Assets/Images/Test/btd5MonkeySubIcon.png");
        game.load.image("mortarTowerIconIMG", "Assets/Images/Test/btd5MortarTowerIcon.png");
        game.load.image("ninjaMonkeyIconIMG", "Assets/Images/Test/btd5NinjaMonkeyIcon.png");
        game.load.image("sniperMonkeyIconIMG", "Assets/Images/Test/btd5SniperMonkeyIcon.png");
        game.load.image("spikeFactoryIconIMG", "Assets/Images/Test/btd5SpikeFactoryIcon.png");
        game.load.image("superMonkeyIconIMG", "Assets/Images/Test/btd5SuperMonkeyIcon.png");
        game.load.image("tackShooterIconIMG", "Assets/Images/Test/btd5TackShooterIcon.png");
        game.load.image("wizardLordIconIMG", "Assets/Images/Test/btd5WizardLordIcon.png");

        
        //some test enemy assets
        game.load.image("mediumGroundEnemyIMG", "Assets/Images/Test/canyonDefenseMediumGroundEnemy.png");
        game.load.image("mediumGroundEnemyIMG", "Assets/Images/Test/canyonDefenseMediumGroundEnemy.png");

        
        game.load.image ("rangeExteriorIMG", "Assets/Images/greyCircle_interior.png");     //range circle
        game.load.image ("rangeExterior2IMG", "Assets/Images/greyCircle_interior2.png");   //range circle
        
        game.load.script("webFont", "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js");
        
    },  //function preload
    
    create: function (){
        //scale game to fit page
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = game.scale.pageAlignVertically = true;
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#ffffff'

        centerX = game.width/2;
        centerY = game.height/2;
        
        game.time.events.loop(Phaser.Timer.SECOND, enemyStuff.spawnEnemy, this);
        
        towerStuff.moveToPoint = game.add.sprite(centerX, centerY, null);
        towerStuff.moveToPoint.visible = false
        
        enemyStuff.home = helper.setHW(game.add.sprite(centerX, game.height - 200, "dudeIMG"), 1, 1);
        game.physics.arcade.enable(enemyStuff.home);
        
        enemyStuff.endPoint = helper.setHW(game.add.sprite(centerX, 0, "dudeIMG"), 10, 10);
        game.physics.arcade.enable(enemyStuff.endPoint);
        
        enemyStuff.moveToPoint = enemyStuff.home;


        towerStuff.towerFactory(0, game.world.width/2, 500);
//        towerStuff.towerFactory(1, 100, 100);
        
        towerStuff.slotFactory(1, 400, 300);
        towerStuff.slotFactory(1, 100, 300);
        
        UI.createUI().createUnPauseInputListener().createPauseBtn();
    },  //function create
    
    update: function (){
        // Aim manual towers to mouse click
        game.input.onDown.add(function (event) {            
            if (canClickOnGame) {
                var canTowerRotate = true;                
                //check if clicked on tower
                loop:
                    for (var i = 0; i < towerStuff.allTowerArr.length; i ++) {                        
                        var towerSprite = towerStuff.allTowerArr[i];
            
                        //find corners of tower
                        var width = towerSprite.width, height = towerSprite.height;
                        
                        var x1 = towerSprite.x - (width/2), x2 = towerSprite.x + (width/2),   //x1 left, x2 right
                            y1 = towerSprite.y - (height/2), y2 = towerSprite.y + (height/2);   //y1 upper, y2 lower
                        
                        //if tower is clicked
                        if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){ 
                            canTowerRotate = false;
                            break loop;
                        }
                        
                    }
                
                //rotate only if can
                if (canTowerRotate){ 
                    helper.setXY(towerStuff.moveToPoint, event.x, event.y);
                    for (var i = 0; i < towerStuff.manualTowerArr.length; i ++) {
                        var towerSprite = towerStuff.manualTowerArr[i];
                        towerSprite.rotation = (game.physics.arcade.angleToPointer(towerSprite)) + 90;
                    } 
                }

            }       //if

        }, this);
        
        //collision for bullets and enemies
        for (var enemy = 0; enemy < enemyStuff.allEnemyArray.length; enemy++) {
            var enemySprite = enemyStuff.allEnemyArray[enemy];
            //loop through all towers
            for (var tower = 0; tower < towerStuff.allTowerArr.length; tower++ ){
                var towerSprite = towerStuff.allTowerArr[tower];
                //loop through bullets
                for (var bullet = 0; bullet < towerSprite.bulletArray.length; bullet++) {
                    var bulletSprite = towerSprite.bulletArray[bullet];                    
                    game.physics.arcade.overlap(bulletSprite, enemySprite, enemySprite.hit, null, this);
                }   //for iterate bulletArray
            }   //for iterate towerStuff.allTowerArray
        }   //for iterate enemyStuff.allEnemyArray
    
        //tower find enemy
        for (var tower = 0; tower < towerStuff.autoTowerArr.length; tower++) {
            towerStuff.autoTowerArr[tower].findEnemy(enemyStuff.allEnemyArray);
        }   //for tower find enemy
        
        //when enemy reaches home or end
        for (var enemy = 0; enemy < enemyStuff.allEnemyArray.length; enemy++){
            var enemySprite = enemyStuff.allEnemyArray[enemy];
            //call specific functions depending on what's reached
            game.physics.arcade.overlap(enemySprite, enemyStuff.endPoint, enemySprite.endReached, null, this);
            game.physics.arcade.overlap(enemySprite, enemySprite.target, enemySprite.destinationReached, null, this);
        }   //for 
        
        //keep max ammount of bullets at 20 per tower
        for (var tower = 0; tower < towerStuff.allTowerArr.length; tower++) {
            var towerSprite = towerStuff.allTowerArr[tower];
            if (towerSprite.bulletArray.length > 20) {
                towerSprite.bulletArray.shift().destroy();
            }
        }   //for
        
        //civilain follow enemy
        for (var enemy = 0; enemy < enemyStuff.allEnemyArray.length; enemy++) {
            var enemySprite = enemyStuff.allEnemyArray[enemy];
            if (enemySprite.civilian != null) {
                enemySprite.civilian.followEnemy(enemySprite);
            }
        }       //for
        
        //keep max amount of civilians at 20
        if (allCivilianArr.length > 20) {
            allCivilianArr.shift().destroy();
        }
        
        //kill enemy if dropped() somehow isnt called but it has been dropped
        for (var civilian = 0; civilian < allCivilianArr.length; civilian++) {
            //if civilain isnt picked up then drop()
            if (!allCivilianArr[civilian].isPickedUp) {
                allCivilianArr[civilian].dropped(false);
            }
        }
    
        helper.bringToTop();
    }  //method update
    
};   //object mainGameVar
