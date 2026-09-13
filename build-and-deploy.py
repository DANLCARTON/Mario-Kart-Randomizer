import os
from ftplib import FTP

print("")
print("------------------------------------------")
print("---- BUILD AND DEPLOY                 ----")
print("---- MARIO KART 8 DELUXE RANDOMIZER   ----")
print("------------------------------------------")
print("")

HOST = "89.116.147.237"   # souvent ftp.domaine.fr
USER = "u896943247"
PASSWORD = "mdpFTP00123!?"
REMOTE_DIR = "/domains/ericthiberge.fr/public_html/Mario-Kart-Randomizer"
LOCAL_DIR = "."

print ('')
print ('---- DEPLOY ----')
print ('')

print("🚀 Connexion FTP...")
ftp = FTP(HOST)
ftp.login(USER, PASSWORD)

def upload_dir(local, remote):
    # Crée le dossier distant si nécessaire
    try:
        ftp.mkd(remote)
    except:
        pass

    ftp.cwd(remote)

    for item in os.listdir(local):
        local_path = os.path.join(local, item)

        if os.path.isfile(local_path):
            print(f"⬆️ Upload fichier : {item}")
            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR " + item, f)
        else:
            print(f"📁 Upload dossier : {item}")
            upload_dir(local_path, item)

    ftp.cwd("..")

print("📤 Upload du dossier build...")
upload_dir(LOCAL_DIR, REMOTE_DIR)

ftp.quit()
print("✨ Déploiement terminé !")