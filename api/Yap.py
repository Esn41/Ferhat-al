import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# 1. Eğitim Verilerini Hazırlama
# X: Giriş verileri, y: Bu verilere karşılık gelen doğru sonuçlar (Etiketler)
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=float)
y = np.array([[0], [1], [1], [0]], dtype=float)

# 2. Yapay Zeka Modelini Oluşturma (Katmanları Tanımlama)
model = Sequential([
    Dense(4, input_dim=2, activation='relu'), # Gizli katman (4 nöron)
    Dense(1, activation='sigmoid')            # Çıkış katmanı (1 nöron)
])

# 3. Modeli Derleme 
# Optimizasyon algoritması ve hata hesaplama (loss) yöntemi belirlenir.
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# 4. Modeli Eğitme
# Yapay zeka verilerden öğrenebilmesi için 500 döngü (epoch) boyunca çalıştırılır.
print("Model eğitiliyor...")
model.fit(X, y, epochs=500, verbose=0)

# 5. Yeni Veri ile Tahmin Yapma
test_veri = np.array([[1, 0]], dtype=float)
tahmin = model.predict(test_veri)

print(f"{test_veri[0]} verisi için tahmin sonucu: {tahmin[0][0]:.4f}")
