def isDigitPermutation(x, y): 
	def countDigits(num):
		digitCount = [0] * 10
		while num > 0:
			lastDigit = num % 10
			digitCount[lastDigit] += 1
			num //= 10
		return digitCount

	digitX = countDigits(x)
	digitY = countDigits(y)
	for digit in range(10):
		print(f'digitX = {digitX[digit]}; digitY={digitY[digit]}')
		if digitX[digit] != digitY[digit]:
			return False
	return True


print(isDigitPermutation(122, 221))