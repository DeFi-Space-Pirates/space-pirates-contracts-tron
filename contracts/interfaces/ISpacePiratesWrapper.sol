// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Space Pirates Wrapper Interface
 * @author @Gr3it
 */

interface ISpacePiratesWrapper {
    receive() external payable;

    function tokenContract() external view returns (address);
    function erc20ToId(address _erc20Contract) external view returns(uint256 id);
    function lastId() external view returns(uint256 id);
    
    function erc20Deposit(address _addr, uint256 _amount) external;
    function erc20DepositTo(address _addr, uint256 _amount, address _to) external;
    function erc20Withdraw(address _addr, uint256 _amount) external;
    function erc20WithdrawTo(address _addr, uint256 _amount, address _to) external;
    
    function ethDeposit() external payable;
    function ethDepositTo(address _to) external payable;
    function ethWithdraw(uint256 _amount) external;
    function ethWithdrawTo(uint256 _amount, address _to) external;

    function addERC20(address _erc20Contract) external view returns(uint256 id);

    function feeBasePoint() external view returns(uint256 fee);
    function feeAddress() external view returns (address);
    function setFeeBasePoint(uint256) external view;
    function setFeeAddress(address _feeAddress) external;
}
