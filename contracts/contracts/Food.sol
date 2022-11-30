// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Food {
    constructor() {}

    address public owner;

    struct FoodItem {
        address owner;
        string name;
        string url;
        string originCountry;
    }

    FoodItem[] public foodItems;

    function addFoodItem(
        string memory name,
        string memory url,
        string memory originCountry
    ) public {
        foodItems.push(FoodItem(msg.sender, name, url, originCountry));
    }

    function getFoodItems() public view returns (FoodItem[] memory) {
        return foodItems;
    }

    function getFoodItemsByOwner() public view returns (FoodItem[] memory) {
        uint256 itemCount = 0;

        for (uint256 i = 0; i < foodItems.length; i++) {
            if (foodItems[i].owner == msg.sender) {
                itemCount += 1;
            }
        }

        FoodItem[] memory myfoods = new FoodItem[](itemCount);
        for (uint256 i = 0; i < foodItems.length; i++) {
            if (foodItems[i].owner == msg.sender) {
                myfoods[i] = foodItems[i];
            }
        }

        return myfoods;
    }
}
