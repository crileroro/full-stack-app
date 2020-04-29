import os

def env_debug():
    return os.getenv('DEBUG', True)
    
def env_host():
    return os.getenv('HOST', '127.0.0.1')

def env_port():
    return os.getenv('PORT', 5000)
