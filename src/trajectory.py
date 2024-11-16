import numpy as np
import matplotlib.pyplot as plt

# Parameters for the parabola: y = ax^2 + bx + c
a = 1
b = -2
c = 1

# Generate x values
x = np.linspace(-10, 10, 400)

# Calculate y values based on the quadratic equation
y = a * x**2 + b * x + c

# Create the plot
plt.plot(x, y, label=f'y = {a}x^2 + {b}x + {c}')
plt.title('Parabolic Equation')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.axhline(0, color='black',linewidth=0.5)
plt.axvline(0, color='black',linewidth=0.5)
plt.legend()
plt.show()
