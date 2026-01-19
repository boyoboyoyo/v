---
title: "量子力学の基礎方程式"
date: 2025-01-19T23:00:00+09:00
draft: false
tags: ["量子力学", "物理学", "数式"]
categories: ["物理学"]
mathjax: true
---

## 概要

量子力学は、20世紀初頭に開発された物理学の分野であり、微小な粒子の振る舞いを記述する理論体系です。本記事では、量子力学の基礎となる方程式とその物理的意味について解説します。

## シュレーディンガー方程式

量子力学の基礎となる時間依存シュレーディンガー方程式は以下のように表されます：

\begin{equation} \label{eq:schrodinger}
  i\hbar\frac{\partial}{\partial t}\Psi(x,t) = \hat{H}\Psi(x,t)
\end{equation}

ここで：
- $i$ は虚数単位
- $\hbar = h/2\pi$ は換算プランク定数
- $\Psi(x,t)$ は波動関数
- $\hat{H}$ はハミルトニアン演算子

## 物理的意味

式(\ref{eq:schrodinger})は、波動関数の時間発展がハミルトニアンによって決定されることを示しています。これは、古典力学におけるニュートン方程式に相当する運動方程式です。

### 定常状態

時間に依存しない定常状態の場合、シュレーディンガー方程式は以下のように書けます：

\begin{equation} \label{eq:stationary}
  \hat{H}\psi_n(x) = E_n\psi_n(x)
\end{equation}

これは固有値問題を表しており、$E_n$ は固有値（エネルギー準位）、$\psi_n(x)$ は固有関数（固有状態）です。

## 調和振動子の解

一次元調和振動子のハミルトニアンは：

\begin{equation}
  \hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2\hat{x}^2
\end{equation}

ここで、$\hat{p} = -i\hbar\frac{\partial}{\partial x}$ は運動量演算子、$m$ は質量、$\omega$ は角振動数です。

この固有値問題を解くと、エネルギー準位は：

\begin{equation} \label{eq:energy}
  E_n = \hbar\omega\left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, \ldots
\end{equation}

となり、エネルギーは離散的な値を取ることがわかります。

## 数値例

例えば、$\hbar\omega = 1$ eV の場合、最初の3つのエネルギー準位は：

- $E_0 = 0.5$ eV （基底状態）
- $E_1 = 1.5$ eV （第1励起状態）
- $E_2 = 2.5$ eV （第2励起状態）

## まとめ

量子力学の基礎方程式として、シュレーディンガー方程式を紹介しました。この方程式は、量子システムの時間発展を記述する中心的な役割を果たしています。

## 参考文献

1. J.J. Sakurai, "Modern Quantum Mechanics"
2. L.D. Landau & E.M. Lifshitz, "Quantum Mechanics: Non-Relativistic Theory"
3. 量子力学の教科書

---
*次回はハイゼンベルクの不確定性原理について解説する予定です。*
