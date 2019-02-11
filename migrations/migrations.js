var Ownable = artifacts.require('./contracts/Ownable.sol');
var ZombieFactory = artifacts.require('./contracts/ZombieFactory.sol');
var ZombieFeeding = artifacts.require('./contracts/ZombieFeeding.sol');
var ZombieHelper = artifacts.require('./contracts/ZombieHelper.sol');
var ZombieAttack = artifacts.require('./contracts/ZombieAttack.sol');

module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.deploy(ZombieFactory);
    deployer.deploy(ZombieFeeding);
    deployer.deploy(ZombieHelper);
    deployer.deploy(ZombieAttack);
};
