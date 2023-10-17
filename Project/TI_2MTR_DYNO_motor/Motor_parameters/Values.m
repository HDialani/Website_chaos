% Author: Hitesh Dialani
% Values from the measurements
clc; clear; close all;

Pole_pairs=4;

Rs=1.103/2;     % Ohm

tau=0.500/1000; % s

Ls=2/3*tau*Rs;  % H

lambda_pm=(8.6*9.55/1000)/(4*pi); % Wb

K_e=lambda_pm*sqrt(3)*1000*Pole_pairs*2*pi/60;